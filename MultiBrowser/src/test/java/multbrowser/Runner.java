package multbrowser;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		dryRun = false, //confg a saida do console
		monochrome = true,	//confg a saida do console
		features = {"src/test/resources/"}, // onde est� os fetures do cucumber (l�)
		glue = {"multbrowser/"}, // onde est� os steps (l�)
		plugin = {
					"pretty", //formatador padr�o do cucumber
					"html:target/cucumber-htmlreport", //qual � a pasta que ele vai criar no target
					"json:target/cucumber-report.json", //relat�rio de execu��o do cucumber
					"com.cucumber.listener.ExtentCucumberFormatter:target/ExtentReport.html" //dashboard
				 }
)
public class Runner {

}
