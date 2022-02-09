import axios from "axios";

const fetchUser = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
  return res.data;
  //   .then(res => {
  //     const persons = res.data;
  //     // this.setState({ persons });
  //     console.log(persons, 'persons');
  //     return persons;
  // };
};

export default fetchUser;
