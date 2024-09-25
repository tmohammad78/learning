
/**
 * Sample react component that make a request but it's not okay
 */

import { AuthService } from "../auth.service.ts"

const LoginPage: React.FC<{ authService: AuthService }> = ({ authService }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
	  fetch("https://api.com/login", {
		  method: "POST",
		  headers: {
			  "Content-Type": "application/json",
		  },
		  body: JSON.stringify({ email, password }),
	  })
      .then(response => {
          if (!response.ok) {
              throw new Error("Login failed");
          }
          const user = response.json()
          console.log('Login successful! User:', user)
      })
      .catch(error => {
          console.error("Login error:", error);
          throw error
      })
  }

  return (
    <div>
      <h2>Login Page</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage


/**
 * Better implementaion is to separate the request logic from the component 
 */

import { AuthService } from "../auth.service.ts"

export const AuthApi: AuthService = {
  login: (email, password) => {
    return fetch("https://api.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Login failed");
      }
      return response.json()
    })
    .catch(error => {
      console.error("Login error:", error);
      throw error
    });
  },
  logout: () => {
    return fetch("https://api.com/logout", {
      method: "POST",
    })
    .then(response => {
      if (!response.ok) {
        throw new Error("Logout failed")
      }
    })
    .catch(error => {
      console.error("Logout error:", error)
      throw error
    })
  }
}


import { AuthService } from "../auth.service.ts"

const LoginPage: React.FC<{ authService: AuthService }> = ({ authService }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    try {
      const user = await authService.login(email, password);
      console.log('Login successful! User:', user)
    } catch (error) {
      console.error('Login error:', error)
    }
  }

  return (
    <div>
      <h2>Login Page</h2>
      <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default LoginPage




////////// Example 2

// High-level module
class ShoppingCartService {
  constructor(private paymentProcessor: PaymentProcessor) {}

  checkout(cart: ShoppingCart) {
    return this.paymentProcessor.processPayment(cart);
  }
}

// Low-level module
class PaymentProcessor {
  processPayment(cart: ShoppingCart) {
    // Process the payment for the items in the shopping cart
  }
}

// Abstraction
interface PaymentProcessor {
  processPayment(cart: ShoppingCart): boolean;
}

// Implementation of the abstraction
class StripePaymentProcessor implements PaymentProcessor {
  processPayment(cart: ShoppingCart): boolean {
    // Use the Stripe API to process the payment for the items in the shopping cart
  }
}

// Now the ShoppingCartService depends on the abstraction, not the implementation
const shoppingCartService = new ShoppingCartService(new StripePaymentProcessor());
