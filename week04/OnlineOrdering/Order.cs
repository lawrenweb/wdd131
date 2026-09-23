namespace OnlineOrdering;

public class Order
{
    private List<Product> _products;
    private Customer _customer;

    public Order(Customer customer)
    {
        _products = new List<Product>();
        _customer = customer;
    }

    public List<Product> GetProducts()
    {
        return _products;
    }

    public Customer GetCustomer()
    {
        return _customer;
    }

    public void AddProduct(Product product)
    {
        _products.Add(product);
    }

    public decimal GetTotalCost()
    {
        decimal total = _products.Sum(product => product.GetTotalCost());
        total += _customer.LivesInUsa() ? 5m : 35m;
        return total;
    }

    public string GetPackingLabel()
    {
        return string.Join(Environment.NewLine,
            _products.Select(product => $"{product.GetName()} ({product.GetProductId()})"));
    }

    public string GetShippingLabel()
    {
        return $"{_customer.GetName()}\n{_customer.GetAddress().GetAddressString()}";
    }
}
