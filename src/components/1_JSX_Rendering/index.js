function getGreeting(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Mike',
    lastName: 'Nikolson'
  };
  
  const element = (
     <h1>
      Hello, {getGreeting(user)}!
    </h1>
  );
  export default element