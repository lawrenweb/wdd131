namespace OnlineOrdering;

public class Program
{
    public static void Main()
    {
        Address usaAddress = new Address(
            "123 Main Street",
            "Provo",
            "Utah",
            "USA");
        Customer usaCustomer = new Customer("Ava Johnson", usaAddress);
        Order usaOrder = new Order(usaCustomer);
        usaOrder.AddProduct(new Product("Wireless Keyboard", "KB-100", 29.99m, 1));
        usaOrder.AddProduct(new Product("USB-C Cable", "CB-205", 8.50m, 2));

        Address internationalAddress = new Address(
            "45 Beach Road",
            "Apia",
            "Upolu",
            "Samoa");
        Customer internationalCustomer = new Customer("Lani Talamaivao", internationalAddress);
        Order internationalOrder = new Order(internationalCustomer);
        internationalOrder.AddProduct(new Product("Travel Backpack", "BP-310", 42.00m, 1));
        internationalOrder.AddProduct(new Product("Water Bottle", "WB-415", 15.75m, 2));
        internationalOrder.AddProduct(new Product("Notebook", "NB-520", 6.25m, 3));

        DisplayOrder("Order 1", usaOrder);
        DisplayOrder("Order 2", internationalOrder);
    }

    private static void DisplayOrder(string title, Order order)
    {
        Console.WriteLine($"=== {title} ===");
        Console.WriteLine("Packing Label:");
        Console.WriteLine(order.GetPackingLabel());
        Console.WriteLine();
        Console.WriteLine("Shipping Label:");
        Console.WriteLine(order.GetShippingLabel());
        Console.WriteLine();
        Console.WriteLine($"Total Price: {order.GetTotalCost():C}");
        Console.WriteLine();
    }
}
