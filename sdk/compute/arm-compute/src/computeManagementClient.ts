/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import * as coreAuth from "@azure/core-auth";
import {
  OperationsImpl,
  AvailabilitySetsImpl,
  ProximityPlacementGroupsImpl,
  DedicatedHostGroupsImpl,
  DedicatedHostsImpl,
  SshPublicKeysImpl,
  VirtualMachineExtensionImagesImpl,
  VirtualMachineExtensionsImpl,
  VirtualMachineImagesImpl,
  VirtualMachineImagesEdgeZoneImpl,
  UsageOperationsImpl,
  VirtualMachinesImpl,
  VirtualMachineScaleSetsImpl,
  VirtualMachineSizesImpl,
  ImagesImpl,
  RestorePointCollectionsImpl,
  RestorePointsImpl,
  CapacityReservationGroupsImpl,
  CapacityReservationsImpl,
  VirtualMachineScaleSetExtensionsImpl,
  VirtualMachineScaleSetRollingUpgradesImpl,
  VirtualMachineScaleSetVMExtensionsImpl,
  VirtualMachineScaleSetVMsImpl,
  LogAnalyticsImpl,
  VirtualMachineRunCommandsImpl,
  VirtualMachineScaleSetVMRunCommandsImpl,
  ResourceSkusImpl,
  DisksImpl,
  SnapshotsImpl,
  DiskEncryptionSetsImpl,
  DiskAccessesImpl,
  DiskRestorePointOperationsImpl,
  GalleriesImpl,
  GalleryImagesImpl,
  GalleryImageVersionsImpl,
  GalleryApplicationsImpl,
  GalleryApplicationVersionsImpl,
  GallerySharingProfileImpl,
  SharedGalleriesImpl,
  SharedGalleryImagesImpl,
  SharedGalleryImageVersionsImpl,
  CloudServiceRoleInstancesImpl,
  CloudServiceRolesImpl,
  CloudServicesImpl,
  CloudServicesUpdateDomainImpl,
  CloudServiceOperatingSystemsImpl
} from "./operations";
import {
  Operations,
  AvailabilitySets,
  ProximityPlacementGroups,
  DedicatedHostGroups,
  DedicatedHosts,
  SshPublicKeys,
  VirtualMachineExtensionImages,
  VirtualMachineExtensions,
  VirtualMachineImages,
  VirtualMachineImagesEdgeZone,
  UsageOperations,
  VirtualMachines,
  VirtualMachineScaleSets,
  VirtualMachineSizes,
  Images,
  RestorePointCollections,
  RestorePoints,
  CapacityReservationGroups,
  CapacityReservations,
  VirtualMachineScaleSetExtensions,
  VirtualMachineScaleSetRollingUpgrades,
  VirtualMachineScaleSetVMExtensions,
  VirtualMachineScaleSetVMs,
  LogAnalytics,
  VirtualMachineRunCommands,
  VirtualMachineScaleSetVMRunCommands,
  ResourceSkus,
  Disks,
  Snapshots,
  DiskEncryptionSets,
  DiskAccesses,
  DiskRestorePointOperations,
  Galleries,
  GalleryImages,
  GalleryImageVersions,
  GalleryApplications,
  GalleryApplicationVersions,
  GallerySharingProfile,
  SharedGalleries,
  SharedGalleryImages,
  SharedGalleryImageVersions,
  CloudServiceRoleInstances,
  CloudServiceRoles,
  CloudServices,
  CloudServicesUpdateDomain,
  CloudServiceOperatingSystems
} from "./operationsInterfaces";
import { ComputeManagementClientContext } from "./computeManagementClientContext";
import { ComputeManagementClientOptionalParams } from "./models";

export class ComputeManagementClient extends ComputeManagementClientContext {
  /**
   * Initializes a new instance of the ComputeManagementClient class.
   * @param credentials Subscription credentials which uniquely identify client subscription.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure subscription.
   *                       The subscription ID forms part of the URI for every service call.
   * @param options The parameter options
   */
  constructor(
    credentials: coreAuth.TokenCredential,
    subscriptionId: string,
    options?: ComputeManagementClientOptionalParams
  ) {
    super(credentials, subscriptionId, options);
    this.operations = new OperationsImpl(this);
    this.availabilitySets = new AvailabilitySetsImpl(this);
    this.proximityPlacementGroups = new ProximityPlacementGroupsImpl(this);
    this.dedicatedHostGroups = new DedicatedHostGroupsImpl(this);
    this.dedicatedHosts = new DedicatedHostsImpl(this);
    this.sshPublicKeys = new SshPublicKeysImpl(this);
    this.virtualMachineExtensionImages = new VirtualMachineExtensionImagesImpl(
      this
    );
    this.virtualMachineExtensions = new VirtualMachineExtensionsImpl(this);
    this.virtualMachineImages = new VirtualMachineImagesImpl(this);
    this.virtualMachineImagesEdgeZone = new VirtualMachineImagesEdgeZoneImpl(
      this
    );
    this.usageOperations = new UsageOperationsImpl(this);
    this.virtualMachines = new VirtualMachinesImpl(this);
    this.virtualMachineScaleSets = new VirtualMachineScaleSetsImpl(this);
    this.virtualMachineSizes = new VirtualMachineSizesImpl(this);
    this.images = new ImagesImpl(this);
    this.restorePointCollections = new RestorePointCollectionsImpl(this);
    this.restorePoints = new RestorePointsImpl(this);
    this.capacityReservationGroups = new CapacityReservationGroupsImpl(this);
    this.capacityReservations = new CapacityReservationsImpl(this);
    this.virtualMachineScaleSetExtensions = new VirtualMachineScaleSetExtensionsImpl(
      this
    );
    this.virtualMachineScaleSetRollingUpgrades = new VirtualMachineScaleSetRollingUpgradesImpl(
      this
    );
    this.virtualMachineScaleSetVMExtensions = new VirtualMachineScaleSetVMExtensionsImpl(
      this
    );
    this.virtualMachineScaleSetVMs = new VirtualMachineScaleSetVMsImpl(this);
    this.logAnalytics = new LogAnalyticsImpl(this);
    this.virtualMachineRunCommands = new VirtualMachineRunCommandsImpl(this);
    this.virtualMachineScaleSetVMRunCommands = new VirtualMachineScaleSetVMRunCommandsImpl(
      this
    );
    this.resourceSkus = new ResourceSkusImpl(this);
    this.disks = new DisksImpl(this);
    this.snapshots = new SnapshotsImpl(this);
    this.diskEncryptionSets = new DiskEncryptionSetsImpl(this);
    this.diskAccesses = new DiskAccessesImpl(this);
    this.diskRestorePointOperations = new DiskRestorePointOperationsImpl(this);
    this.galleries = new GalleriesImpl(this);
    this.galleryImages = new GalleryImagesImpl(this);
    this.galleryImageVersions = new GalleryImageVersionsImpl(this);
    this.galleryApplications = new GalleryApplicationsImpl(this);
    this.galleryApplicationVersions = new GalleryApplicationVersionsImpl(this);
    this.gallerySharingProfile = new GallerySharingProfileImpl(this);
    this.sharedGalleries = new SharedGalleriesImpl(this);
    this.sharedGalleryImages = new SharedGalleryImagesImpl(this);
    this.sharedGalleryImageVersions = new SharedGalleryImageVersionsImpl(this);
    this.cloudServiceRoleInstances = new CloudServiceRoleInstancesImpl(this);
    this.cloudServiceRoles = new CloudServiceRolesImpl(this);
    this.cloudServices = new CloudServicesImpl(this);
    this.cloudServicesUpdateDomain = new CloudServicesUpdateDomainImpl(this);
    this.cloudServiceOperatingSystems = new CloudServiceOperatingSystemsImpl(
      this
    );
  }

  operations: Operations;
  availabilitySets: AvailabilitySets;
  proximityPlacementGroups: ProximityPlacementGroups;
  dedicatedHostGroups: DedicatedHostGroups;
  dedicatedHosts: DedicatedHosts;
  sshPublicKeys: SshPublicKeys;
  virtualMachineExtensionImages: VirtualMachineExtensionImages;
  virtualMachineExtensions: VirtualMachineExtensions;
  virtualMachineImages: VirtualMachineImages;
  virtualMachineImagesEdgeZone: VirtualMachineImagesEdgeZone;
  usageOperations: UsageOperations;
  virtualMachines: VirtualMachines;
  virtualMachineScaleSets: VirtualMachineScaleSets;
  virtualMachineSizes: VirtualMachineSizes;
  images: Images;
  restorePointCollections: RestorePointCollections;
  restorePoints: RestorePoints;
  capacityReservationGroups: CapacityReservationGroups;
  capacityReservations: CapacityReservations;
  virtualMachineScaleSetExtensions: VirtualMachineScaleSetExtensions;
  virtualMachineScaleSetRollingUpgrades: VirtualMachineScaleSetRollingUpgrades;
  virtualMachineScaleSetVMExtensions: VirtualMachineScaleSetVMExtensions;
  virtualMachineScaleSetVMs: VirtualMachineScaleSetVMs;
  logAnalytics: LogAnalytics;
  virtualMachineRunCommands: VirtualMachineRunCommands;
  virtualMachineScaleSetVMRunCommands: VirtualMachineScaleSetVMRunCommands;
  resourceSkus: ResourceSkus;
  disks: Disks;
  snapshots: Snapshots;
  diskEncryptionSets: DiskEncryptionSets;
  diskAccesses: DiskAccesses;
  diskRestorePointOperations: DiskRestorePointOperations;
  galleries: Galleries;
  galleryImages: GalleryImages;
  galleryImageVersions: GalleryImageVersions;
  galleryApplications: GalleryApplications;
  galleryApplicationVersions: GalleryApplicationVersions;
  gallerySharingProfile: GallerySharingProfile;
  sharedGalleries: SharedGalleries;
  sharedGalleryImages: SharedGalleryImages;
  sharedGalleryImageVersions: SharedGalleryImageVersions;
  cloudServiceRoleInstances: CloudServiceRoleInstances;
  cloudServiceRoles: CloudServiceRoles;
  cloudServices: CloudServices;
  cloudServicesUpdateDomain: CloudServicesUpdateDomain;
  cloudServiceOperatingSystems: CloudServiceOperatingSystems;
}
