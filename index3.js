function payWithPaystack() {
    var handler = PaystackPop.setup({
      key: '',
      email: 'customer@example.com',
      amount: 10000, // Amount in kobo
      currency: 'NGN', // Currency code
      ref: 'UNIQUE_TRANSACTION_REFERENCE', // Generate a unique reference for each transaction
      metadata: {
        custom_fields: [
          {
            display_name: 'Customer Name',
            variable_name: 'customer_name',
            value: 'John Doe'
          }
        ]
      },
      callback: function(response) {
        // Handle the transaction response
        if (response.status === 'success') {
          alert('Payment successful');
          // You can perform additional actions here, such as updating your database or redirecting the user
        } else {
          alert('Payment failed');
        }
      },
      onClose: function() {
        alert('Payment window closed');
      }
    });
    handler.openIframe(); // Open the Paystack payment iframe
  }
  