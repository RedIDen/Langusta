namespace Lingusta.Data.Models
{
    public class User
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Salt { get; set; }

        public string? Moto { get; set; }

        public byte[]? Avatar { get; set; }

        public Language? NativeLanguage { get; set; }

        public Language? LearningLanguage { get; set; }

        public bool IsFullyRegistered { get; set; }
    }
}
