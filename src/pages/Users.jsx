import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { usersRequest, usersSuccess, usersFailure } from '../features/userSlice';
import { DataGrid } from '@mui/x-data-grid';
import {userAPI} from "../api/userAPI.jsx";
import Button from '@mui/material/Button';

export const UsersPage = () => {
  const dispatch = useDispatch();
  const stateSlice = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(usersRequest());

    userAPI.getUsers()
      .then((usersData) => {
        dispatch(usersSuccess(usersData));
      })
      .catch((error) => {
        dispatch(usersFailure(error.toString()));
      });
  }, [dispatch]);

  if (stateSlice.loading) {
    return <div>Loading...</div>;
  }

  if (stateSlice.error) {
    return <div>Error: {stateSlice.error}</div>;
  }

  const columns = [
    { field: 'username', headerName: 'Username', flex: 1 },
    { field: 'address', headerName: 'Address', flex: 1 },
    { field: 'user_type', headerName: 'User Type', flex: 1 },
    {
      field: 'edit',
      headerName: 'Action',
      sortable: false,
      flex: 0.5,
      renderCell: () => (
          <Button
            variant="contained"
            color="primary"
            size="small"
          >
            Edit
          </Button>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: '70vw' }}>
      <DataGrid
        rows={stateSlice.users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        getRowId={(row) => row.id}
      />
    </div>
  );
};
