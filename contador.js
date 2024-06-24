

const { Builder, By } = require('selenium-webdriver');
async function main() {
const driver = await new Builder().forBrowser('chrome').build();

    
    

    try {
        await driver.get("https://ifvestdeploy-7422.onrender.com/login");

        await driver.sleep(1000); 

        await driver.findElement(By.name("usuario")).sendKeys("ruan177"); 

        await driver.findElement(By.name("senha")).sendKeys("123");

  
        await driver.findElement(By.css(".btn-login")).click();

        await driver.sleep(3000); 

  
        await driver.navigate().to("https://ifvestdeploy-7422.onrender.com/usuario/criar-simulado");

        await driver.findElement(By.id("titulo")).sendKeys("CT06");

        await driver.findElement(By.id("descricao")).sendKeys("Testando");

        // encontrar elemento por css/seletor ou pelo xpath 
        await driver.findElement(By.xpath("//a[contains(text(), 'Criar Simulado')]")).click();
       //await driver.findElement(By.cssSelector("a[href='/criar-simulado']")).click();

        await driver.sleep(3000); 

       
        await driver.findElement(By.xpath("//*[@id='questao-1']")).click();

        await driver.findElement(By.xpath("//*[@id='questao-2']")).click();
        
        await driver.findElement(By.xpath("//button[contains(@class, 'botao-associar')]")).click();
        
        
        await driver.findElement(By.xpath("//*[@id='questao-13']")).click();
        
        await driver.findElement(By.xpath("//*[@id='questao-15']")).click();
        
        await driver.findElement(By.css("form:nth-child(1) > button:nth-child(4)")).click();
        
        await driver.findElement(By.linkText("Voltar para a simulado")).click();
        
        
        await driver.findElement(By.xpath("//div[contains(@class, 'nav__logout')]//div[contains(@class, 'nav__name')]")).click();
        
        

        console.log("Teste concluído com sucesso!");
    } catch (error) {
        console.error("Erro durante a execução do teste:", error);
    } finally {
        await driver.quit();
    }
}

main();
