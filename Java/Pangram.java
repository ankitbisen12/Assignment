import java.util.HashSet;

public class Pangram{
    public static void main(String[] args) {
        String input = "Abcdefghijklmnopqrstuvwxyz";
        
        if (isPangram(input)) {
            System.out.println("Input is a pangram.");
        } else {
            System.out.println("Input is not a pangram.");
        }
    }

    public static boolean isPangram(String s){
        //converting string s to lowercase
        s= s.toLowerCase();

        HashSet<Character> charSet = new HashSet<>();

        for(int i=0;i<s.length();i++){
            char ch = s.charAt(i);
            if(ch >='a' && ch <='z'){
                charSet.add(ch);
            }
        }

        return charSet.size() ==26;
    }
}