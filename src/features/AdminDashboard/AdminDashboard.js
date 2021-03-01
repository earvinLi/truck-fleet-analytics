// External Dependencies
import React, { useEffect } from 'react';
import {
  useDispatch,
  useSelector,
} from 'react-redux';

// Material-UI Dependencies
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import NavigationBar from '../NavigationBar/NavigationBar';
import AdminStatusHeader from './AdminStatusHeader';
import AdminTruckDataTable from './AdminTruckDataTable';
import { getCompanyTruckData } from './reducers/companyTruckDataSlice';
import getAdminDashboardStyles from './styles/adminDashboardStyles';

// Component Definition
const AdminDashboard = () => {
  const {
    rootStyle,
  } = makeStyles((theme) => getAdminDashboardStyles(theme))();

  const dispatch = useDispatch();
  const { id: companyId } = useSelector((state) => state.signIn.user.company);

  useEffect(() => {
    dispatch(getCompanyTruckData(companyId));
  }, [companyId]);

  return (
    <div className={rootStyle}>
      <NavigationBar />
      <AdminStatusHeader />
      <AdminTruckDataTable />
    </div>
  );
};

export default AdminDashboard;
