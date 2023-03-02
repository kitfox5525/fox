import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.select.Elements;
import java.io.File;
import java.io.IOException;

public class Main {
    public static void main(String[] args) {
        try {
            // Load HTML file
            File input = new File("D:\\site\\site.html");
            Document doc = Jsoup.parse(input, "UTF-8");

            // Select and modify elements
            Elements title = doc.select("title");
            title.text("Self-Introduction Page - Updated");

            Elements header = doc.select("header");
            header.attr("class", "new-class");
            header.select(".logo").after("<div>Some additional content</div>");

            Elements menu = doc.select(".menu");
            menu.addClass("menu-active");

            // Print modified HTML
            System.out.println(doc);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
