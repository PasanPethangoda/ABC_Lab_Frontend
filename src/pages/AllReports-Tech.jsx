import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TechNav from '../compontents/TechNav';

const FileManagement = () => {
  const [file, setFile] = useState(null);
  const [patientName, setPatientName] = useState('');
  const [patientNIC, setPatientNIC] = useState('');
  const [files, setFiles] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchedFiles, setSearchedFiles] = useState([]);
  const [downloadedFile, setDownloadedFile] = useState(null);
  const [searchNIC, setSearchNIC] = useState('');
  
  
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

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSearchChange = (e) => {
    setSearchNIC(e.target.value);
    // Filter files based on the entered patient NIC
    const filteredFiles = files.filter((file) =>
      file.patientNIC.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchedFiles(filteredFiles);
  };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('patientName', patientName);
//     formData.append('patientNIC', patientNIC);

//     try {
//       const response = await axios.post('http://localhost:8080/api/v1/files/upload', formData);
//       console.log(response.data);
//       fetchAllFiles();
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

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

  const handleDelete = async (fileId) => {
    try {
      const response = await axios.delete(`http://localhost:8080/api/v1/files/delete/${fileId}`);
      console.log(response.data);
      fetchAllFiles();
    } catch (error) {
      console.error('Error deleting file:', error);
    }
  };

  const handleUpdate = (fileId) => {
    // Find the selected file based on fileId
    const selected = files.find((file) => file._id === fileId);
    setSelectedFile(selected);

    // Set the update form fields with the selected file data
    setPatientName(selected.patientName);
    setPatientNIC(selected.patientNIC);
  };

  const handleSubmitUpdate = async () => {
    // Perform the update request using the selectedFile._id and updated data
    const formData = new FormData();
    formData.append('file', file);
    formData.append('patientName', patientName);
    formData.append('patientNIC', patientNIC);

    try {
      const response = await axios.put(`http://localhost:8080/api/v1/files/update/${selectedFile._id}`, formData);
      console.log(response.data);
      fetchAllFiles();
      // Clear the update form fields and selectedFile after successful update
      alert("Patient Report Updated Successfully");
      setPatientName('');
      setPatientNIC('');
      setFile(null);
      setSelectedFile(null);
    } catch (error) {
      alert("Patient Report Updated Failed");
    }
  };

  
  

  return (
    <div>
        <TechNav/>

      {/* Display Files Table */}
      <div className="container mt-5">
        <h3 className="text-center pb-3"><i>All Patient Reports</i></h3>

         {/* Search input */}
      <div className="mb-3" style={{ width: '30%' }}>
        <input
          type="text"
          className="form-control border border-warning"
          placeholder="Search by Patient NIC"
          value={searchNIC}
          onChange={handleSearchChange}
        />
      </div>
      {/* Search input */}

        <table className="table table-primary border shadow mx-auto" style={{ width: '100%' }}>
          <thead class="thead-dark">
            <tr class="text-center">
              <th scope="col">File Name</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Patient NIC</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody class="text-center">
            {(searchNIC ? searchedFiles : files).map((file) => (
              <tr key={file._id}>
                <td>{file.fileName}</td>
                <td>{file.patientName}</td>
                <td>{file.patientNIC}</td>
                <td>
                  <button type="button" className="btn btn-success mx-1" onClick={() => handleUpdate(file._id)}>Update</button>
                  <button type="button" className="btn btn-warning mx-1" onClick={() => handleDownload(file._id)}>Download</button>
                  <button type="button" className="btn btn-outline-danger mx-1" onClick={() => handleDelete(file._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update form */}
      <div className="container mt-4 mb-5">
        <div className="row justify-content-center pt-3">
          <div className="col-lg-6">
            <form className="border shadow p-3">
              <h3 className="text-center pb-2">Update Test Report</h3>

              <div className="form-group">
                <label>Patient Name:</label>
                <input type="text" className="form-control" placeholder="Patient Name" value={patientName} onChange={(e) => setPatientName(e.target.value)} />
              </div>

              <div className="form-group">
                <label>Patient NIC:</label>
                <input type="text" className="form-control" placeholder="Patient NIC" value={patientNIC} onChange={(e) => setPatientNIC(e.target.value)} />
              </div>

              <div className="form-group">
                <label>Upload Test Report</label>
                <input type="file" className="form-control" onChange={handleFileChange} />
              </div>

              <div>
                <button className="btn btn-success mt-4" onClick={handleSubmitUpdate}>Update Report</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      {/* End Update form */}

     
      
    </div>
  );
};

export default FileManagement;
