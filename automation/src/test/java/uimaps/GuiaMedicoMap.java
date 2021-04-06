package uimaps;

import core.Element;

public class GuiaMedicoMap {

    public Element txtBuscar = new Element("xpath", "//*[@id='search-query-input']//div[text()='Digite aqui o que você procura']");
    public Element txtPreencherBusca = new Element("xpath", "//*[@id='search-query-input']//input");
    public Element btnPesquisar = new Element ("xpath", "//*[@id='react-tabs-1']//button[text() = 'Pesquisar']");
    public Element txtEspecialidade = new Element ("xpath", "//span[@class='ProviderSpecialties--item']");
    public  Element txtEstado = new Element("xpath", "//*[@class='ProviderAddressWrapper']//a[contains('Rio de Janeiro','Rio de Janeiro')]");

}
