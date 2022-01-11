
function generateManager(manager) {
  return `<div class="card custom-card col-4" style="width: 18rem;">
  <div class="card-header">
      ${manager.name}<br>
      ${manager.getRole()}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${manager.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
    <li class="list-group-item">School: ${manager.officeNumber}</li>
  </ul>
</div>
`
}
 
function generateEngineer(engineer) {
  return `<div class="card custom-card col-4" style="width: 18rem;">
  <div class="card-header">
      ${engineer.name}<br>
      ${engineer.getRole()}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${engineer.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
    <li class="list-group-item">Github: <a href="https://github.com/${engineer.github}" target="_blank" rel="noopener noreferrer">${engineer.github}</a></li>
  </ul>
</div>
`
}

function generateIntern(intern) {
  return `<div class="card custom-card col-4" style="width: 18rem;">
  <div class="card-header">
      ${intern.name}<br>
      ${intern.getRole()}
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">ID: ${intern.id}</li>
    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
    <li class="list-group-item">School: ${intern.school}</li>
  </ul>
</div>
`
}
  

function generateMarkdown(teamCards) {
  let divCards =[];  

  teamCards.map((employee) => {
    switch (employee.getRole()) {
      case 'Manager':
        divCards.push(generateManager(employee))
        break;
      case 'Engineer':
        divCards.push(generateEngineer(employee));
        break;
      case 'Intern':
        divCards.push(generateIntern(employee));
        break;
    }
  })      

  divCards = divCards.join('')

  return `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="./style.css">
      <title>Team Profile</title>
  </head>
  <body>
      <header class="custom-jumbotron jumbotron">
        <h1 class="display-4">
          My Team
        <h1>
      </header>
      <main class="container">
          <div id="team" class="row d-flex justify-content-center">
            ${divCards}
          </div>
      </main>
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>`;
}

module.exports = generateMarkdown;  





  