import mysql from 'mysql';
import { MYSQL_CONNECTION_STRING } from './constants';

const connection = mysql.createConnection(MYSQL_CONNECTION_STRING);

export default connection;
