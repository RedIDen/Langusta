namespace Lingusta.Data.Models
{
    public class Question
    {
        public int Id { get; set; }

        public Theme Theme { get; set; }

        public string Text { get; set; }

        public ICollection<Answer> Answers { get; set; }
    }
}
