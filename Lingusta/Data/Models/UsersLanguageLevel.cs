namespace Lingusta.Data.Models
{
    public class UsersLanguageLevel
    {
        public int Id { get; set; }

        public User User { get; set; }

        public Language Language { get; set; }

        public LanguageLevel Level { get; set; }
    }
}
