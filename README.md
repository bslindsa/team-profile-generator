# Team Profile Generator
  
[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

## Description

This application takes prompts the user to input information about their team, which is then used to generate a profile web page with team information. This information will include team member names, ID numbers, and emails. In addition, it will also accept office numbers for managers, github usernames for engineers, and shcools for interns.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
   
<a name="installation"></a>
## Installation

This code can be cloned from the repository.

<a name="usage"></a>
## Usage

Once the application is installed, the user will open it in VSCode. Using the integrated terminal in VSCode, the user will input the command "node .\index.js". This will initiate the program and prompt the user to answer questions about the team. First, information will be entered for the team manager, then the user will be able to choose to add more engineers or interns, or to not add any more team members. The user can add as many engineers or interns as they like. Once the user is finished, they will select the option to not add any more team members, which will automatically end the program and write the information into a new index.html file that will be found in the 'dist' folder. The user will open that index.html file in their default browser and view their new team profile page. 

The following video demonstrates the application functionality:

https://watch.screencastify.com/v/wOH4EC5j8CuBVF0jgwgq
![A user runs the program and answers the prompted questions. The application will then create an index.html file that will display information on the team members on a webpage.](./util/team-profile-gen.gif)


<a name="license"></a>
## License

This project is licensed under the Apache 2.0 license.
undefined

<a name="contributing"></a>
## Contributing

Open source

<a name="tests"></a>
## Tests
To run tests, run the 'npm i' command to install modules, then use the following command:
```
npm test
```

<a name="questions"></a>
## Questions

Github Username: bslindsa 

Email: bslindsa@gmail.com

