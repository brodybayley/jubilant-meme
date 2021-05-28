public class Droid {

  String name;
  int batteryLevel;

  public Droid(String droidName) {
    name = droidName;
    batteryLevel = 100;
  }

  public void performTask(String task) {
    batteryLevel = batteryLevel - 10;
    System.out.println(name + " is performing tasks: " + task);
  }

  public String toString() {
    return "Hello, I am the droid: " + name;
  }

  public static void main(String[] args) {
    Droid codey = new Droid("Codey");
    System.out.println(codey);
    codey.performTask("juggling");
    codey.performTask("cooking");
  }

}