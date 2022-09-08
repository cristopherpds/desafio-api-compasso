import app from './src/app.js';
const port = process.env.PORT || 3001;

app.listen(port, ()=>{
  console.log(`Srvidor escutando em http://localhost:${port}`);
});