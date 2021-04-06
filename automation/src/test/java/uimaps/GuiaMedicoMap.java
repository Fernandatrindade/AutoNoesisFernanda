package uimaps;

import core.Element;

public class GuiaMedicoMap {

    public Element txtBuscar = new Element("xpath", "//*[@id='search-query-input']//div[text()='Digite aqui o que você procura']");
    public Element txtPreencherBusca = new Element("xpath", "//*[@id='search-query-input']//input");
    public Element btnPesquisar = new Element("xpath", "//*[@id='react-tabs-1']//button[text() = 'Pesquisar']");
    public Element btnVermais = new Element("xpath", "//*[@id='gm-v3-root']//*[text()='Ver mais resultados']");
    public Element txtEspecialidade(int intEspecialidade) {
        return new Element("xpath", "(//*[@class='ProviderSpecialties--item'])[" + intEspecialidade + "]");
    }
    public Element txtEstado(int intEstado, String estado) {
        return new Element("xpath", "((//*[@class='ProviderAddressWrapper'])//a[contains('" + estado + "','" + estado + "')])[" + intEstado + "]");
    }
    public Element cmpCard = new Element("xpath", "//*[@class='ProviderCard']");


}