namespace API.Requests
{
    public class OrderRequest
    {
        public int Number { get; set; }
        public CustomerRequest Customer { get; set; }
        public string Description { get; set; }
    }
}
