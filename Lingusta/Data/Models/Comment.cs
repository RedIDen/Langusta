namespace Lingusta.Data.Models
{
    public class Comment
    {
        public int Id { get; set; }

        public Text Text { get; set; }

        public User User { get; set; }

        public string Data { get; set; }

        public DateTime DateTime { get; set; }
    }
}
