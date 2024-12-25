// useNavigateBugSolution.js
import { useNavigate, useParams } from 'react-router-dom';

function UserDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const handleEdit = () => {
    if (id && typeof id === 'string') {
      navigate(`/users/edit/${id}`);
    } else {
      console.error('Invalid user ID');
      // Handle the error appropriately, e.g., display an error message
    }
  };

  return (
    <div>
      <h1>User Detail</h1>
      <button onClick={handleEdit}>Edit User</button>
    </div>
  );
}

export default UserDetail;