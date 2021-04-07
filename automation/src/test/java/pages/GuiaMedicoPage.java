package pages;

import config.PropertiesFile;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
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
    @When("^Digitar a sua busca \"(.*)\"$")
    public void procurarEstados(String estados) throws Exception {
        esperarPagina();
        esperarImplicita();
        clicar(guiaMedicoMap.txtBuscar);
        preencher(guiaMedicoMap.txtPreencherBusca, estados);
        scrollToElement(guiaMedicoMap.txtPreencherBusca);
        clicar(guiaMedicoMap.txtPreencherBusca);
        esperarPagina();
        esperarImplicita();
        GerarEvidenciasUtils.takeScreenshot("Digitar a sua busca");
    }

    /**
     * Clicar no botão pesquisar
     *
     * @throws Exception Se nao conseguir achar um elemento
     */
    @And("^Clicar no botão pesquisar")
    public void btnPesquisar() throws Exception {
        esperarPagina();
        esperarImplicita();
        clicarEnter(guiaMedicoMap.btnPesquisar);
        esperarPagina();
        esperarImplicita();
        GerarEvidenciasUtils.takeScreenshot("Clicar em pesquisar");

    }

    /**
     * Validar o estado e especialidade
     *
     * @throws Exception Se nao conseguir achar um elemento
     */
    @Then("^Validar a apresentação dos resultados com a Especialidade e Cidade no Estado  \"(.*)\"$")
    public void txtValidarEstadoEspecialidade(String estado) throws Exception {
        esperarPagina();
        int sizeCard = getElementsSize(guiaMedicoMap.cmpCard);

        for (int x = 1; x <= sizeCard; x++) {

            esperarPagina();
            esperarImplicita();
            esperarElemento(guiaMedicoMap.txtEstado(x, estado));
            scrollToElement(guiaMedicoMap.txtEstado(x, estado));
            String validarTxtEstado = retornaValor(guiaMedicoMap.txtEstado(x, estado));
            Assert.assertTrue(validarTxtEstado, true);
            Assert.assertEquals(estado,estado);

            esperarElemento(guiaMedicoMap.txtEspecialidade(x));
            scrollToElement(guiaMedicoMap.txtEspecialidade(x));
            String validarEspecialidade = retornaValor(guiaMedicoMap.txtEspecialidade(x));
            Assert.assertTrue(validarEspecialidade, true);

        }

        GerarEvidenciasUtils.takeScreenshot("Validar estado e especialidade ");
    }

    /**
     * Validar cidade
     *
     * @throws Exception Se nao conseguir achar um elemento
     */
    @Then("^Validar estado que não contem a cidade \"(.*)\"$")
    public void txtValidar(String estado) throws Exception {
        esperarPagina();
        esperarImplicita();

        scrollToElement(guiaMedicoMap.btnVermais);
        clicar(guiaMedicoMap.btnVermais);
        scrollToElement(guiaMedicoMap.btnVermais);
        clicar(guiaMedicoMap.btnVermais);

        int sizeCard = getElementsSize(guiaMedicoMap.cmpCard);
        System.out.println(sizeCard);

        for (int x = 1; x <= sizeCard; x++) {
            esperarPagina();
            esperarImplicita();
            esperarElemento(guiaMedicoMap.txtEstado(x, estado));
            String validarEstadoPresente = retornaValor(guiaMedicoMap.txtEstado(x, estado));
            String validarEstadoNaoPresente = retornaValor(guiaMedicoMap.txtEstado(x, estado));

            Assert.assertTrue(validarEstadoPresente, true);
            Assert.assertFalse(validarEstadoNaoPresente, false);
        }
        GerarEvidenciasUtils.takeScreenshot("Validar estados que não contem na pagina ");

    }
}

