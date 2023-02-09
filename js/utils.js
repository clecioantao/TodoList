// Defindo referências para elementos da página
var authForm = document.getElementById('authForm')
var authFormTitle = document.getElementById('authFormTitle')
var register = document.getElementById('register')
var access = document.getElementById('access')
var loading = document.getElementById('loading')
var auth = document.getElementById('auth')
var userContent = document.getElementById('userContent')
var userEmail = document.getElementById('userEmail')
var sendEmailVerificationDiv = document.getElementById('sendEmailVerificationDiv')
var emailVerified = document.getElementById('emailVerified')
var passwordReset = document.getElementById('passwordReset')


// Alterar o formulário de autenticação para o cadastro de novas contas
function toggleToRegister() {
  authForm.submitAuthForm.innerHTML = 'Cadastrar conta'
  authFormTitle.innerHTML = 'Insira seus dados para se cadastrar'
  hideItem(register)  // esconder atalho para cadastrar conta
  showItem(access) // mostrar atalho para acessar
  hideItem(passwordReset) // esconder resetar senha
}

// Alterar o formulário de autenticação para o acesso de contas já existentes
function toggleToAccess() {
  authForm.submitAuthForm.innerHTML = 'Acessar'
  authFormTitle.innerHTML = 'Acesse a sua conta para continuar'
  hideItem(access) // // esconder atalho para acessar cadastrar conta
  showItem(register) // mostrar atalho para registro
  showItem(passwordReset) // mostrar refefinir senha
}

// Simplifica a exibição de elementos da página
function showItem(element) {
  element.style.display = 'block'
}

// Simplifica a remoção de elementos da página
function hideItem(element) {
  element.style.display = 'none'
}

// Mostrar conteúdo para usuários autenticados
function showUserContent(user) {
  console.log(user)
  if (user.emailVerified){
    emailVerified.innerHTML = 'Email verificado'
    hideItem(sendEmailVerificationDiv)
  } else {
    emailVerified.innerHTML = 'Email nao verificado'
    showItem(sendEmailVerificationDiv)
  }
  userEmail.innerHTML = user.email
  hideItem(auth)
  showItem(userContent)
}

// Mostrar conteúdo para usuários não autenticados
function showAuth() {
  authForm.email.value = ''
  authForm.password.value = ''
  hideItem(userContent)
  showItem(auth)
}

// atributos extras de configuração de e-mail
var actionCodeSetting = {
  url: 'http://127.0.0.1:5500/index.html'
}