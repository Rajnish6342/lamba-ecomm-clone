import axios from 'axios'

const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:3005/api'
});

export const axiosInstanceAuth = axios.create({
  baseURL: 'http://localhost:3005/api',
  headers: {
    'token': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWJkNzc1ZjNlYmU5MWRlOGE2YzIyYiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2Mzc2MDMyMDAsImV4cCI6MTYzNzg2MjQwMH0.h95fcI3BwTGlC2k5Yjp8aGN4YWes0-Xzbjaa0ciBBk8'
  }
});