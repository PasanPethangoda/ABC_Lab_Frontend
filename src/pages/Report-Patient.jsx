import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../compontents/Navbar';

const SearchReport = () => {
//   const [file, setFile] = useState(null);
//   const [patientName, setPatientName] = useState('');
  const [patientNIC, setPatientNIC] = useState('');
  const [files, setFiles] = useState([]);
  const [searchedFiles, setSearchedFiles] = useState([]);
//   const [selectedFile, setSelectedFile] = useState(null);
  const [downloadedFile, setDownloadedFile] = useState(null);

  
  
  useEffect(() => {
    fetchAllFiles();
  }, []);

  const fetchAllFiles = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/files/all');
      setFiles(response.data);
    } catch (error) {
      console.error('Error fetching files:', error);
    }
  };

 

  const handleDownload = async (fileId) => {
    try {
      const response = await axios.get(`http://localhost:8080/api/v1/files/download/${fileId}`, {
        responseType: 'arraybuffer',
      });

      const contentDisposition = response.headers['content-disposition'];
      let fileName;

      if (contentDisposition) {
        const fileNameMatch = contentDisposition.match(/filename="(.+)"/);

        if (fileNameMatch) {
          fileName = fileNameMatch[1];
        }
      }

      if (!fileName) {
        // If the server didn't provide a filename, generate one
        fileName = `downloaded_file_${new Date().toISOString()}.pdf`;
      }

      const blob = new Blob([response.data], { type: 'application/pdf' });

      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setDownloadedFile(blob);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };

  const handleSearch = () => {
    const filteredFiles = files.filter((file) => file.patientNIC === patientNIC);
    setSearchedFiles(filteredFiles);
  };

  


  return (
    <div
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/img/lb.jpg)`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Adjust the height as needed
      }}
    >
      <Navbar/>
    
       {/* Start Search Option  */}
         <div class="container mt-5">
         <h3 class="text-center pb-3"><i>Download Test Reports</i></h3>
         <div class="row  pt-3">
          <div class="col-lg-6">
          <div class="form-group">
        <label class="fw-bold">Enter Patient NIC</label>
        <input
          type="text"
          className="form-control shadow"
          placeholder="Enter Patient NIC"
          value={patientNIC}
          onChange={(e) => setPatientNIC(e.target.value)}
        />
        </div>

        <div>
        <button class="btn btn-outline-primary mt-2 px-4" onClick={handleSearch}>SEARCH</button>
        </div>

        </div>
        </div>
        </div>
        {/* End Search Option  */}


        {/* Start Search Result */}
        <div class="container mt-3 mb-5">
        <div class="row justify-content-center pt-3">
        <table class="table table-primary border shadow ">
          <thead class="thead-dark" >
            <tr class="text-center">
              <th scope="col">File Name</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Patient NIC</th>
              <th scope="col">Download</th>
            </tr>
          </thead>
          <tbody class="text-center">
            {searchedFiles.map((file) => (
              <tr key={file.fileId}>
                <td>{file.fileName}</td>
                <td>{file.patientName}</td>
                <td>{file.patientNIC}</td>
                <td>
                  <button className="btn btn-warning" onClick={() => handleDownload(file._id)}>
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      {/* End Search Result Table  */}


    </div>
  );
};

export default SearchReport;

