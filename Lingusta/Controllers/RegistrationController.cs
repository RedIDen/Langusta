using Lingusta.Helpers;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace Lingusta.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegistrationController : ControllerBase
    {
        private readonly ILogger<RegistrationController> _logger;

        public RegistrationController(ILogger<RegistrationController> logger)
        {
            _logger = logger;
        }

        [HttpPost("Register")]
        public ActionResult<int> Register([FromBody] RegistrationData data)
        {
            // Здесь вы можете обработать данные регистрации, сохранить их в базе данных и выполнить другие необходимые действия

            // Пример: проверка, что пользователь с таким именем пользователя не существует
            if (UserExists(data.Email))
            {
                return BadRequest("User with the provided username already exists.");
            }

            // Пример: создание нового пользователя в базе данных
            CreateUser(data.Email, data.Name, data.Password);

            return Ok("User successfully registered.");
        }

        [HttpPost("Login")]
        public ActionResult<string> Login([FromBody] LoginData data)
        {
            // Здесь вы можете обработать данные авторизации, проверить их с базой данных и выполнить другие необходимые действия

            // Пример: проверка введенных учетных данных
            if (IsValidCredentials(data.Email, data.Password))
            {
                // Пример: создание и возврат токена аутентификации
                string token = JwtHelper.GenerateAuthToken(data.Email);
                return Ok(token);
            }

            return BadRequest("Invalid username or password.");
        }

        private bool IsValidCredentials(string email, string password)
        {
            // Здесь можно реализовать логику проверки учетных данных с базой данных
            // Вернуть true, если учетные данные действительны, и false в противном случае
            return true;
        }

        private bool UserExists(string email)
        {
            // Здесь можно реализовать логику проверки существования пользователя в базе данных
            // Вернуть true, если пользователь существует, и false в противном случае
            return false;
        }

        private void CreateUser(string email, string name, string password)
        {
            // Здесь можно реализовать логику создания нового пользователя в базе данных
        }
    }

    public class RegistrationData
    {
        public string Email { get; set; }
        public string Name { get; set; }
        public string Password { get; set; }
        public string SecondPassword { get; set; }
    }

    public class LoginData
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public bool RememberMe { get; set; }
    }
}
