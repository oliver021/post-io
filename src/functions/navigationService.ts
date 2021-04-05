import { ReactNode, createElement, FunctionComponent } from 'react';
import { INavigationResolver, PageInfo } from './../types/navigationModel';
import {uniqueId} from "lodash"
import { AutoUpdateBase } from '../ui/store/autoUpdateBase';

export type InfoRecord =  Map<string, PageInfo>;

/**
 * @class
 * @implements INavigationResolver
 */
export default class NavigationService 
extends AutoUpdateBase<InfoRecord>
implements INavigationResolver
{
    public reciveValue(value: InfoRecord): void {
        this.info = value;
    }
    
    // hook update
    public resolveValue(): InfoRecord {
       return this.info;
    }
   
    private routes: Map<string, FunctionComponent> = new Map;
    private records: Map<string, ReactNode> = new Map;
    private info: InfoRecord = new Map;

    mapPage(pageName: string, _func: FunctionComponent): NavigationService{
        this.routes.set(pageName, _func);
        return this;
    }

    getPagesList(): PageInfo[] {
        throw new Error('Method not implemented.');
    }

    restore(page: string, objectState: any): ReactNode{
        return null;
    }

    getPage(id: string): ReactNode{
        const result = this.records.get(id);
        if(result !== undefined){
            return result;
        }else{
            throw new Error('not exist the page with id: ' + id);
        }
    }

    router(page: string): [string, ReactNode]{
       const functional = this.routes.get(page);
       if(functional !== undefined){
            var { id, component } = this.createPage(functional);
            this.records.set(id, component);
            return [id, component];
       }else{
           throw new Error('not exist the page: ' + page);
       }
    }

    private createPage(functional: FunctionComponent<{}>) {
        let id = uniqueId();
        const trackHandler = (info: PageInfo) => {
            this.info.set(id, info);
        };
        const component = createElement<{ tracker: any; }>(functional, { tracker: trackHandler });
        return { id, component };
    }
}