package pages;

import config.PropertiesFile;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import org.junit.Assert;
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
        scrollToElement(guiaMedicoMap.txtPreencherBusca);
        clicar(guiaMedicoMap.txtPreencherBusca);
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
        scrollToElement(guiaMedicoMap.txtPreencherBusca);
        esperarPagina();
        esperarImplicita();
        clicar(guiaMedicoMap.btnPesquisar);
        GerarEvidenciasUtils.takeScreenshot("Clicar em pesquisar");
    }

    /**
     * Validar a especialidade e cidade
     *
     * @throws Exception Se nao conseguir achar um elemento
     */
    @And("^Validar a especiolidade e estado")
    public void txtValidar (String estatos) throws Exception {
        esperarPagina();
        esperarImplicita();
        String validarElemento =  retornaValor(guiaMedicoMap.txtEspecialidade);
        if ( validarElemento!= null) {
            validaExistenciaElemento(guiaMedicoMap.txtEspecialidade);
        }
        Assert.assertEquals(guiaMedicoMap.txtEstado, estatos);

        GerarEvidenciasUtils.takeScreenshot("Validar especialista e estados");
    }

}
