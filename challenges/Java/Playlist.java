import java.util.ArrayList;

class Playlist {

  public static void main(String[] args) {
    ArrayList<String> desertIslandPlaylist = new ArrayList<String>();
    desertIslandPlaylist.add("mama mia");
    desertIslandPlaylist.add("summer lovin");
    desertIslandPlaylist.add("time of my life");
    desertIslandPlaylist.add("dancing queen");
    desertIslandPlaylist.add("believe");
    desertIslandPlaylist.add("candy shop");
    desertIslandPlaylist.add("together again");
    System.out.println(desertIslandPlaylist);

    System.out.println(desertIslandPlaylist.size());

    desertIslandPlaylist.remove(3);
    System.out.println(desertIslandPlaylist.size());

    desertIslandPlaylist.remove(2);
    System.out.println(desertIslandPlaylist.size());

    String songA = "mama mia";
    String songB = "time of my life";

    desertIslandPlaylist.set(0, songB);
    desertIslandPlaylist.set(2, songA);

    System.out.println(desertIslandPlaylist);
  }

}

class Playlist {

}
