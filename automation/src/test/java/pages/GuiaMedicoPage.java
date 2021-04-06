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
        clicarEnter(guiaMedicoMap.btnPesquisar);
        GerarEvidenciasUtils.takeScreenshot("Clicar em pesquisar");
    }

    /**
     * Validar a especialidade e cidade
     *
     * @throws Exception Se nao conseguir achar um elemento
     */
    @And("^Validar a especialidade e cidade")
    public void txtValidarEspecialidade() throws Exception {
        esperarPagina();
        esperarImplicita();
        String validarElemento =  retornaValor(guiaMedicoMap.txtEspecialidade);
        String validarElementoCidade = retornaValor(guiaMedicoMap.txtEstado);
        if ( validarElemento !=null && validarElementoCidade != null) {
            validaExistenciaElemento(guiaMedicoMap.txtEspecialidade);
            validaExistenciaElemento(guiaMedicoMap.txtEstado);
            Assert.assertNotNull(guiaMedicoMap.txtEspecialidade);
        }

        GerarEvidenciasUtils.takeScreenshot("Validar especialidade e cidade");
    }

    /**
     * Validar cidade
     *
     * @throws Exception Se nao conseguir achar um elemento
     */
    @And("^Validar estados \"(.*)\"$")
    public void txtValidar (String cidade) throws Exception {
        esperarPagina();
        esperarImplicita();
       // Assert.assertTrue(guiaMedicoMap.txtEstado).toLowerCase().contains(estatos);
        //Assert.assertNotNull(guiaMedicoMap.txtEstado, cidade);
        GerarEvidenciasUtils.takeScreenshot("Validar  cidade");
    }
}
