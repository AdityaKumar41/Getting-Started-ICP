import Float "mo:base/Float";
actor Calculator {
  public func add(num1: Float, num2: Float) : async Float {
    return num1 + num2;
  };

  public func subtract(num1: Float, num2: Float) : async Float {
    return num1 - num2;
  };

  public func multiply(num1: Float, num2: Float) : async Float {
    return num1 * num2;
  };

  public func divide(num1: Float, num2: Float) : async Float {
    
    return (num1 / num2);
  };
};
