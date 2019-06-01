package multbrowser;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		dryRun = false, //confg a saida do console
		monochrome = true,	//confg a saida do console
		features = {"src/test/resources/"}, // onde está os fetures do cucumber (lê)
		glue = {"multbrowser/"}, // onde está os steps (lê)
		plugin = {
					"pretty", //formatador padrão do cucumber
					"html:target/cucumber-htmlreport", //qual é a pasta que ele vai criar no target
					"json:target/cucumber-report.json", //relatório de execução do cucumber
					"com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport.html" //dashboard
				 }
)
public class Runner {

}
