// Que: Enter a Roman Number as input and convert it to an integer. (ex IX = 9) 
import java.util.HashMap;

public class Roman{
    public static void main(String[] args) {
        String romanNo = "IXIX";
        int integerEquivalent = romanToInt(romanNo);
        System.out.println("The integer equivalent of roman string " + romanNo + " is: " + integerEquivalent);
    }

    public static int romanToInt(String s) {
        // creating a hashmap i.e mapping roman number to integer values.
        HashMap<Character, Integer> roman = new HashMap<>();
        roman.put('I', 1);
        roman.put('V', 5);
        roman.put('X', 10);
        roman.put('L', 50);
        roman.put('C', 100);
        roman.put('D', 500);
        roman.put('M', 1000);

        int result = 0;
        int prevVal = 0;

        // Iterating entire string of roman number.Starting from end
        for (int i = s.length() - 1; i >= 0; i--) {
            char currRoman = s.charAt(i);
            int currVal = roman.get(currRoman);

            // Check if current value is smaller than previous value if yes then subtract it to result.
            if (currVal < prevVal) {
                result -= currVal;
            } else {
                result += currVal;
            }

            // Updating previous value for next iteration of roman string.
            prevVal = currVal;
        }

        return result;
    }
}
