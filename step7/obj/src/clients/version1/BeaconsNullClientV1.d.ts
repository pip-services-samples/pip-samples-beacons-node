import { FilterParams } from 'pip-services-commons-node';
import { PagingParams } from 'pip-services-commons-node';
import { DataPage } from 'pip-services-commons-node';
import { BeaconV1 } from '../../../src/data/version1/BeaconV1';
import { IBeaconsClientV1 } from './IBeaconsClientV1';
export declare class BeaconsNullClientV1 implements IBeaconsClientV1 {
    getBeacons(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<BeaconV1>) => void): void;
    getBeaconById(correlationId: string, beaconId: string, callback: (err: any, beacon: BeaconV1) => void): void;
    getBeaconByUdi(correlationId: string, udi: string, callback: (err: any, beacon: BeaconV1) => void): void;
    calculatePosition(correlationId: string, siteId: string, udis: string[], callback: (err: any, position: any) => void): void;
    createBeacon(correlationId: string, beacon: BeaconV1, callback: (err: any, beacon: BeaconV1) => void): void;
    updateBeacon(correlationId: string, beacon: BeaconV1, callback: (err: any, beacon: BeaconV1) => void): void;
    deleteBeaconById(correlationId: string, beaconId: string, callback: (err: any, beacon: BeaconV1) => void): void;
}
