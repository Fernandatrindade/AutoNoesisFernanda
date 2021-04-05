package scenarios;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)

@CucumberOptions
        (features = "features/noesis",
                glue = {"pages"},
                monochrome = true, tags = {"@buscarMedicos"}, plugin = { "pretty", "html:target/report-html" })

public class TestRunner {
}
