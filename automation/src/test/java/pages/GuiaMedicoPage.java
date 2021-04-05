package pages;

import config.PropertiesFile;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import uimaps.GuiaMedicoMap;
import utils.GerarEvidenciasUtils;

public class GuiaMedicoPage extends BasePage {

    GuiaMedicoMap guiaMedicoMap = new GuiaMedicoMap();
    PropertiesFile propertiesFile = new PropertiesFile();

    /**
     * Digitar a sua busca pela região
     *
     * @throws Exception Se nao conseguir achar um elemento
     */
    @And("^Digitar a sua busca \"(.*)\"$")
    public void procurarEstados(String estados) throws Exception {
        esperarPagina();
        esperarImplicita();
        clicar(guiaMedicoMap.txtBuscar);
        preencher(guiaMedicoMap.txtPreencherBusca,estados);
        GerarEvidenciasUtils.takeScreenshot("Digitar a sua busca");
    }

    /**
     * Clicar no botão pesquisar
     *
     * @throws Exception Se nao conseguir achar um elemento
     */
    @And("^Clicar no botão pesquisar")
    public void btnPesquisar () throws Exception {
        esperarPagina();
        esperarImplicita();
        
        clicar(guiaMedicoMap.btnPesquisar);
        esperarPagina();
        esperarImplicita();
        GerarEvidenciasUtils.takeScreenshot("Clicar em pesquisar");
    }

}
