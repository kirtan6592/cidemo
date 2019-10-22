import { AppComponent } from 'src/app/app.component';
import { ChilComponent2Service } from 'src/child-component2/chil-component2.service';
import { inject } from '@angular/core/testing';
import { CustomePipe } from 'src/shared/Pipe/custome.pipe';

describe('AppComponent', () => {
    let pipe: CustomePipe;
    beforeEach(() => {
        pipe = new CustomePipe();
    });

    it('should return test', () => {
        const comp = new AppComponent(pipe);
        expect(comp.firstName).toEqual('test');

    });

    it('should emit null or undefined when not clicked', () => {
        const comp = new AppComponent(pipe);
        expect(comp.emittedValue).toEqual(undefined);
    });

    it('check welcome string', () => {
        const comp = new AppComponent(pipe);
        const event: any = 'test 2';
        comp.onEmitted(event);
        expect(comp.welcomeString).toBeUndefined('This Value is emitted from child component:');
    });

    it('should be created', inject([ChilComponent2Service], (service: ChilComponent2Service) => {
        expect(service).toBeTruthy();
    }));

});


