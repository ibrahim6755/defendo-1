import { useState } from 'react'
import './AdminPanelStyles.css'
import adminavatar from '../imgs/adminavatar.png'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logOut } from '../features/authSlice';



function AdminPanel() {

  const [selectedImage, setSelectedImage] = useState(null);
  const dispatch = useDispatch()
  const handleImageUpload = (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();

    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="admin-panel-wrapper p-2">
      <div className="row">
        <div className="col-md-2 admin-sider-bar p-2 py-5">
          <h4 className='text-center fw-bold'>Admin</h4>
          <ul className='m-0 p-0 '>
            <li className='p-2 my-4'><a href="">Profile</a></li>
            <li className='p-2 my-4'><Link to='users'>Users</Link></li>
            <li className='p-2 my-4'><Link to='orders'>Orders</Link></li>
          </ul>
        </div>
        <div className="col-md-9 right-column">
          <div className="avatar w-25">
            <img className='w-50' src={adminavatar} alt="" />
          </div>
          <div className="add-product w-50">
            <h4 className='text-center fw-bold'>Add Product</h4>
            <div className="form">
              <label htmlFor="" className='fw-bold'>Enter title</label> <br />
              <input className='text-center my-2 p-2 w-100' type="text" placeholder='Enter The Product Title' />
              <br />
              <label htmlFor="" className='fw-bold'>Enter Description</label> <br />
              <input className='text-center my-2 p-2 w-100' type="text" placeholder='Enter The Product Description' />
              <br />
              <label htmlFor="" className='fw-bold'>Enter Price</label> <br />
              <input className='text-center my-2 p-2 w-100' type="text" placeholder='Enter The Product Price' />
              <br />
              <div>
                <input type="file" accept="image/*" onChange={handleImageUpload} />
                {selectedImage && (
                  <div>
                    <h2>Selected Image</h2>
                    <img src={selectedImage} alt="Selected" style={{ maxWidth: '100%' }} />
                  </div>
                )}
              </div>
              <button className='w-100 p-2 my-3'>Add Product</button>
            </div>
          </div>

          <div className="signout mx-5">
            <button onClick={() => dispatch(logOut())} className='w-100 p-2'>Log Out</button>
          </div>
        </div>
      </div>


    </div>
  );

}

export default AdminPanel