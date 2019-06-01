package multbrowser;

import static org.junit.Assert.assertEquals;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;

import cucumber.api.java.After;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class BuscaGoogle {
	String url = "https://www.google.com.br/";
	WebDriver driver;

	@Given("^Racesso o site do Google no \"([^\"]*)\" e digito \"([^\"]*)\"$")
	public void racesso_o_site_do_Googleno_e_digito(String browser, String termo) throws Throwable {
		switch (browser) {
		case "firefox":
			// Mozilla
			System.setProperty("webdriver.gecko.driver",
					"C:\\Users\\renat\\eclipse-workspace\\119-workspace\\MultiBrowser\\Drivers\\Mozilla\\0.24.0\\geckodriver.exe");
		//	FirefoxOptions ffOptions = new FirefoxOptions();
		//	ffOptions.setBinary(
		//			"C:\\Users\\renat\\eclipse-workspace\\119-workspace\\MultiBrowser\\Drivers\\Mozilla\\0.24.0\\geckodriver.exe");

			driver = new FirefoxDriver(); //ffOptions
			driver.manage().timeouts().implicitlyWait(480, TimeUnit.SECONDS);
			break;
		case "chrome":
			// Chrome
			System.setProperty("webdriver.chrome.driver",
					"C:\\Users\\renat\\eclipse-workspace\\119-workspace\\MultiBrowser\\Drivers\\Chrome\\74\\Chrome74_chromedriver_win32.exe");
			driver = new ChromeDriver();
			driver.manage().timeouts().implicitlyWait(180, TimeUnit.SECONDS);
			break;

		case "ie":
			// IE
			System.setProperty("webdriver.ie.driver",
					"C:\\Users\\renat\\eclipse-workspace\\119-workspace\\MultiBrowser\\Drivers\\IE\\x32\\IEDriverServer.exe");
			driver = new InternetExplorerDriver();
			driver.manage().timeouts().implicitlyWait(480, TimeUnit.SECONDS);
			break;
			
		// case "edge":
		// Edge
		// System.setProperty("webdriver.edge.driver",
		// "C:\\Users\\renat\\eclipse-workspace\\119-workspace\\MultiBrowser\\Drivers\\Edge\\msedgedriver.exe");
		// driver = new EdgeDriver();
		// driver.manage().timeouts().implicitlyWait(240, TimeUnit.SECONDS);
		}

		driver.manage().window().maximize();

		driver.get(url);
		driver.findElement(By.name("q")).clear();
		driver.findElement(By.name("q")).sendKeys(termo);

	}

	@And("^RPressiona Enter$")
	public void pressiona_Enter() throws Throwable {
		assertEquals("Google", driver.getTitle());
		driver.findElement(By.name("q")).sendKeys(Keys.ENTER);
		Thread.sleep(3000);

	}

	@Then("^RExibe a pagina com o titulo \"([^\"]*)\"$")
	public void exibe_a_pagina_com_o_titulo(String resultado) throws Throwable {
		assertEquals(resultado, driver.getTitle());
		driver.quit();
	}

}
