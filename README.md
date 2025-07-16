# react-app

This project includes a simple reusable Axios setup for making REST API calls in React.

## Usage

Import the request helpers from `src/api/request.js` to perform HTTP calls using the preconfigured Axios instance.

```
import { getRequest, postRequest, putRequest, deleteRequest } from './src/api/request';

const fetchUsers = async () => {
  try {
    const data = await getRequest('/users');
    console.log(data);
  } catch (err) {
    console.error('API error', err);
  }
};
```

The Axios instance is configured in `src/api/axiosInstance.js` with a base URL from the `REACT_APP_API_BASE_URL` environment variable and JSON headers.
