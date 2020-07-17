import utils from '../../helpers/utils';

const signMeIN = () => {
  console.warn('yeah I will sign you in');
};

const loginButton = () => {
  const domString = '<button id="google-auth" class="btn btn-warning"><i class="fab fa-google-plus"></i>LOG ME IN</button>';
  utils.printToDom('#auth', domString);
  $('#google-auth').click(signMeIN);
};

export default { loginButton };
