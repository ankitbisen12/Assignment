import java.util.Random;


public class ShuffleNumbers {
    public static void main(String[] args){
        int arr[]= {1, 2, 3, 4, 5, 6, 7};

        for(int i=0;i<arr.length;i++){
            ShuffleNos(arr);
        }
    }

    public static void ShuffleNos(int[] arr){
          Random randomObj = new Random();

          for(int i=0;i<arr.length;i++){
            int randomVal = randomObj.nextInt(arr.length);

            int currVal = arr[i];
            arr[i] = arr[randomVal];
            arr[randomVal] = currVal;
          }

          for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]+" ");
          }

          System.out.println();
    }
    
}
