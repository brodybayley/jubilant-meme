public class MadLibs {
  /*
  This program generates a mad libbed story.
  Author: Brody
  Date: 5/26/2021
  */
  	public static void main(String[] args){
      String name1 = "Shaungelica";
      String adjective1 = "confused";
      String adjective2 = "long";
      String adjective3 = "sleepy";
      String verb1 = "glide";
      String noun1 = "peacocks";
      String noun2 = "plaunts";
      String noun3 = "trees";
      String noun4 = "spectator";
      String noun5 = "cervezas";
      String noun6 = "drag queen";
      String name2 = "Braungel";
      int number = 1998;
      String place1 = "Barthelona";
      
      
      //The template for the story
      String story = "This morning "+name1+" woke up feeling "+adjective1+". 'It is going to be a "+adjective2+" day!' Outside, a bunch of "+noun1+"s were protesting to keep "+noun2+" in stores. They began to "+verb1+" to the rhythm of the "+noun3+", which made all the "+noun4+"s very "+adjective3+". Concerned, "+name1+" texted "+name2+", who flew "+name1+" to "+place1+" and dropped "+name1+" in a puddle of frozen "+noun5+". "+name1+" woke up in the year "+number+", in a world where "+noun6+"s ruled the world.";

      System.out.println(story);
    }       
}