const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json());

app.post('/save-users', (req, res) => {
  const usersData = JSON.stringify(req.body, null, 2);

  fs.writeFileSync('users.json', usersData);

  res.json({ message: 'Dati utente salvati con successo.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});
