namespace Lingusta.Data.Models
{
    public class Text
    {
        public int Id { get; set; }

        public User User { get; set; }

        public Language Language { get; set; }

        public string Title { get; set; }

        public string Data { get; set; }

        public DateTime DateTime { get; set; }

        public ICollection<Comment> Comments { get; set; }
    }
}
