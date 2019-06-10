import axios from 'axios';

const getSynonym = word => axios("https://api.datamuse.com/words?rel_syn=" + word);
export default getSynonym;
