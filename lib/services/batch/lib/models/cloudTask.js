/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * @summary An Azure Batch Task.
  *
 * Batch will retry Tasks when a recovery operation is triggered on a Node.
 * Examples of recovery operations include (but are not limited to) when an
 * unhealthy Node is rebooted or a Compute Node disappeared due to host
 * failure. Retries due to recovery operations are independent of and are not
 * counted against the maxTaskRetryCount. Even if the maxTaskRetryCount is 0,
 * an internal retry due to a recovery operation may occur. Because of this,
 * all Tasks should be idempotent. This means Tasks need to tolerate being
 * interrupted and restarted without causing any corruption or duplicate data.
 * The best practice for long running Tasks is to use some form of
 * checkpointing.
 *
 */
class CloudTask {
  /**
   * Create a CloudTask.
   * @property {string} [id] A string that uniquely identifies the Task within
   * the Job. The ID can contain any combination of alphanumeric characters
   * including hyphens and underscores, and cannot contain more than 64
   * characters.
   * @property {string} [displayName] A display name for the Task. The display
   * name need not be unique and can contain any Unicode characters up to a
   * maximum length of 1024.
   * @property {string} [url] The URL of the Task.
   * @property {string} [eTag] The ETag of the Task. This is an opaque string.
   * You can use it to detect whether the Task has changed between requests. In
   * particular, you can be pass the ETag when updating a Task to specify that
   * your changes should take effect only if nobody else has modified the Task
   * in the meantime.
   * @property {date} [lastModified] The last modified time of the Task.
   * @property {date} [creationTime] The creation time of the Task.
   * @property {object} [exitConditions] How the Batch service should respond
   * when the Task completes.
   * @property {array} [exitConditions.exitCodes]
   * @property {array} [exitConditions.exitCodeRanges]
   * @property {object} [exitConditions.preProcessingError]
   * @property {string} [exitConditions.preProcessingError.jobAction] The
   * default is none for exit code 0 and terminate for all other exit
   * conditions. If the Job's onTaskFailed property is noaction, then
   * specifying this property returns an error and the add Task request fails
   * with an invalid property value error; if you are calling the REST API
   * directly, the HTTP status code is 400 (Bad Request). Possible values
   * include: 'none', 'disable', 'terminate'
   * @property {string} [exitConditions.preProcessingError.dependencyAction]
   * The default is 'satisfy' for exit code 0, and 'block' for all other exit
   * conditions. If the Job's usesTaskDependencies property is set to false,
   * then specifying the dependencyAction property returns an error and the add
   * Task request fails with an invalid property value error; if you are
   * calling the REST API directly, the HTTP status code is 400  (Bad Request).
   * Possible values include: 'satisfy', 'block'
   * @property {object} [exitConditions.fileUploadError] If the Task exited
   * with an exit code that was specified via exitCodes or exitCodeRanges, and
   * then encountered a file upload error, then the action specified by the
   * exit code takes precedence.
   * @property {string} [exitConditions.fileUploadError.jobAction] The default
   * is none for exit code 0 and terminate for all other exit conditions. If
   * the Job's onTaskFailed property is noaction, then specifying this property
   * returns an error and the add Task request fails with an invalid property
   * value error; if you are calling the REST API directly, the HTTP status
   * code is 400 (Bad Request). Possible values include: 'none', 'disable',
   * 'terminate'
   * @property {string} [exitConditions.fileUploadError.dependencyAction] The
   * default is 'satisfy' for exit code 0, and 'block' for all other exit
   * conditions. If the Job's usesTaskDependencies property is set to false,
   * then specifying the dependencyAction property returns an error and the add
   * Task request fails with an invalid property value error; if you are
   * calling the REST API directly, the HTTP status code is 400  (Bad Request).
   * Possible values include: 'satisfy', 'block'
   * @property {object} [exitConditions.default] This value is used if the Task
   * exits with any nonzero exit code not listed in the exitCodes or
   * exitCodeRanges collection, with a pre-processing error if the
   * preProcessingError property is not present, or with a file upload error if
   * the fileUploadError property is not present. If you want non-default
   * behavior on exit code 0, you must list it explicitly using the exitCodes
   * or exitCodeRanges collection.
   * @property {string} [exitConditions.default.jobAction] The default is none
   * for exit code 0 and terminate for all other exit conditions. If the Job's
   * onTaskFailed property is noaction, then specifying this property returns
   * an error and the add Task request fails with an invalid property value
   * error; if you are calling the REST API directly, the HTTP status code is
   * 400 (Bad Request). Possible values include: 'none', 'disable', 'terminate'
   * @property {string} [exitConditions.default.dependencyAction] The default
   * is 'satisfy' for exit code 0, and 'block' for all other exit conditions.
   * If the Job's usesTaskDependencies property is set to false, then
   * specifying the dependencyAction property returns an error and the add Task
   * request fails with an invalid property value error; if you are calling the
   * REST API directly, the HTTP status code is 400  (Bad Request). Possible
   * values include: 'satisfy', 'block'
   * @property {string} [state] The current state of the Task. Possible values
   * include: 'active', 'preparing', 'running', 'completed'
   * @property {date} [stateTransitionTime] The time at which the Task entered
   * its current state.
   * @property {string} [previousState] The previous state of the Task. This
   * property is not set if the Task is in its initial Active state. Possible
   * values include: 'active', 'preparing', 'running', 'completed'
   * @property {date} [previousStateTransitionTime] The time at which the Task
   * entered its previous state. This property is not set if the Task is in its
   * initial Active state.
   * @property {string} [commandLine] The command line of the Task. For
   * multi-instance Tasks, the command line is executed as the primary Task,
   * after the primary Task and all subtasks have finished executing the
   * coordination command line. The command line does not run under a shell,
   * and therefore cannot take advantage of shell features such as environment
   * variable expansion. If you want to take advantage of such features, you
   * should invoke the shell in the command line, for example using "cmd /c
   * MyCommand" in Windows or "/bin/sh -c MyCommand" in Linux. If the command
   * line refers to file paths, it should use a relative path (relative to the
   * Task working directory), or use the Batch provided environment variable
   * (https://docs.microsoft.com/en-us/azure/batch/batch-compute-node-environment-variables).
   * @property {object} [containerSettings] The settings for the container
   * under which the Task runs. If the Pool that will run this Task has
   * containerConfiguration set, this must be set as well. If the Pool that
   * will run this Task doesn't have containerConfiguration set, this must not
   * be set. When this is specified, all directories recursively below the
   * AZ_BATCH_NODE_ROOT_DIR (the root of Azure Batch directories on the node)
   * are mapped into the container, all Task environment variables are mapped
   * into the container, and the Task command line is executed in the
   * container. Files produced in the container outside of
   * AZ_BATCH_NODE_ROOT_DIR might not be reflected to the host disk, meaning
   * that Batch file APIs will not be able to access those files.
   * @property {string} [containerSettings.containerRunOptions] These
   * additional options are supplied as arguments to the "docker create"
   * command, in addition to those controlled by the Batch Service.
   * @property {string} [containerSettings.imageName] This is the full Image
   * reference, as would be specified to "docker pull". If no tag is provided
   * as part of the Image name, the tag ":latest" is used as a default.
   * @property {object} [containerSettings.registry] This setting can be
   * omitted if was already provided at Pool creation.
   * @property {string} [containerSettings.registry.registryServer] If omitted,
   * the default is "docker.io".
   * @property {string} [containerSettings.registry.userName]
   * @property {string} [containerSettings.registry.password]
   * @property {string} [containerSettings.workingDirectory] The default is
   * 'taskWorkingDirectory'. Possible values include: 'taskWorkingDirectory',
   * 'containerImageDefault'
   * @property {array} [resourceFiles] A list of files that the Batch service
   * will download to the Compute Node before running the command line. For
   * multi-instance Tasks, the resource files will only be downloaded to the
   * Compute Node on which the primary Task is executed. There is a maximum
   * size for the list of resource files.  When the max size is exceeded, the
   * request will fail and the response error code will be
   * RequestEntityTooLarge. If this occurs, the collection of ResourceFiles
   * must be reduced in size. This can be achieved using .zip files,
   * Application Packages, or Docker Containers.
   * @property {array} [outputFiles] A list of files that the Batch service
   * will upload from the Compute Node after running the command line. For
   * multi-instance Tasks, the files will only be uploaded from the Compute
   * Node on which the primary Task is executed.
   * @property {array} [environmentSettings] A list of environment variable
   * settings for the Task.
   * @property {object} [affinityInfo] A locality hint that can be used by the
   * Batch service to select a Compute Node on which to start the new Task.
   * @property {string} [affinityInfo.affinityId] You can pass the affinityId
   * of a Node to indicate that this Task needs to run on that Compute Node.
   * Note that this is just a soft affinity. If the target Compute Node is busy
   * or unavailable at the time the Task is scheduled, then the Task will be
   * scheduled elsewhere.
   * @property {object} [constraints] The execution constraints that apply to
   * this Task.
   * @property {moment.duration} [constraints.maxWallClockTime] If this is not
   * specified, there is no time limit on how long the Task may run.
   * @property {moment.duration} [constraints.retentionTime] The default is 7
   * days, i.e. the Task directory will be retained for 7 days unless the
   * Compute Node is removed or the Job is deleted.
   * @property {number} [constraints.maxTaskRetryCount] Note that this value
   * specifically controls the number of retries for the Task executable due to
   * a nonzero exit code. The Batch service will try the Task once, and may
   * then retry up to this limit. For example, if the maximum retry count is 3,
   * Batch tries the Task up to 4 times (one initial try and 3 retries). If the
   * maximum retry count is 0, the Batch service does not retry the Task after
   * the first attempt. If the maximum retry count is -1, the Batch service
   * retries the Task without limit.
   * @property {object} [userIdentity] The user identity under which the Task
   * runs. If omitted, the Task runs as a non-administrative user unique to the
   * Task.
   * @property {string} [userIdentity.userName] The userName and autoUser
   * properties are mutually exclusive; you must specify one but not both.
   * @property {object} [userIdentity.autoUser] The userName and autoUser
   * properties are mutually exclusive; you must specify one but not both.
   * @property {string} [userIdentity.autoUser.scope] The default value is
   * Task. Possible values include: 'task', 'pool'
   * @property {string} [userIdentity.autoUser.elevationLevel] The default
   * value is nonAdmin. Possible values include: 'nonAdmin', 'admin'
   * @property {object} [executionInfo] Information about the execution of the
   * Task.
   * @property {date} [executionInfo.startTime] 'Running' corresponds to the
   * running state, so if the Task specifies resource files or Packages, then
   * the start time reflects the time at which the Task started downloading or
   * deploying these. If the Task has been restarted or retried, this is the
   * most recent time at which the Task started running. This property is
   * present only for Tasks that are in the running or completed state.
   * @property {date} [executionInfo.endTime] This property is set only if the
   * Task is in the Completed state.
   * @property {number} [executionInfo.exitCode] This property is set only if
   * the Task is in the completed state. In general, the exit code for a
   * process reflects the specific convention implemented by the application
   * developer for that process. If you use the exit code value to make
   * decisions in your code, be sure that you know the exit code convention
   * used by the application process. However, if the Batch service terminates
   * the Task (due to timeout, or user termination via the API) you may see an
   * operating system-defined exit code.
   * @property {object} [executionInfo.containerInfo] This property is set only
   * if the Task runs in a container context.
   * @property {string} [executionInfo.containerInfo.containerId]
   * @property {string} [executionInfo.containerInfo.state] This is the state
   * of the container according to the Docker service. It is equivalent to the
   * status field returned by "docker inspect".
   * @property {string} [executionInfo.containerInfo.error] This is the
   * detailed error string from the Docker service, if available. It is
   * equivalent to the error field returned by "docker inspect".
   * @property {object} [executionInfo.failureInfo] This property is set only
   * if the Task is in the completed state and encountered a failure.
   * @property {string} [executionInfo.failureInfo.category] Possible values
   * include: 'userError', 'serverError'
   * @property {string} [executionInfo.failureInfo.code]
   * @property {string} [executionInfo.failureInfo.message]
   * @property {array} [executionInfo.failureInfo.details]
   * @property {number} [executionInfo.retryCount] Task application failures
   * (non-zero exit code) are retried, pre-processing errors (the Task could
   * not be run) and file upload errors are not retried. The Batch service will
   * retry the Task up to the limit specified by the constraints.
   * @property {date} [executionInfo.lastRetryTime] This element is present
   * only if the Task was retried (i.e. retryCount is nonzero). If present,
   * this is typically the same as startTime, but may be different if the Task
   * has been restarted for reasons other than retry; for example, if the
   * Compute Node was rebooted during a retry, then the startTime is updated
   * but the lastRetryTime is not.
   * @property {number} [executionInfo.requeueCount] When the user removes
   * Compute Nodes from a Pool (by resizing/shrinking the pool) or when the Job
   * is being disabled, the user can specify that running Tasks on the Compute
   * Nodes be requeued for execution. This count tracks how many times the Task
   * has been requeued for these reasons.
   * @property {date} [executionInfo.lastRequeueTime] This property is set only
   * if the requeueCount is nonzero.
   * @property {string} [executionInfo.result] If the value is 'failed', then
   * the details of the failure can be found in the failureInfo property.
   * Possible values include: 'success', 'failure'
   * @property {object} [nodeInfo] Information about the Compute Node on which
   * the Task ran.
   * @property {string} [nodeInfo.affinityId]
   * @property {string} [nodeInfo.nodeUrl]
   * @property {string} [nodeInfo.poolId]
   * @property {string} [nodeInfo.nodeId]
   * @property {string} [nodeInfo.taskRootDirectory]
   * @property {string} [nodeInfo.taskRootDirectoryUrl]
   * @property {object} [multiInstanceSettings] An object that indicates that
   * the Task is a multi-instance Task, and contains information about how to
   * run the multi-instance Task.
   * @property {number} [multiInstanceSettings.numberOfInstances] If omitted,
   * the default is 1.
   * @property {string} [multiInstanceSettings.coordinationCommandLine] A
   * typical coordination command line launches a background service and
   * verifies that the service is ready to process inter-node messages.
   * @property {array} [multiInstanceSettings.commonResourceFiles] The
   * difference between common resource files and Task resource files is that
   * common resource files are downloaded for all subtasks including the
   * primary, whereas Task resource files are downloaded only for the primary.
   * Also note that these resource files are not downloaded to the Task working
   * directory, but instead are downloaded to the Task root directory (one
   * directory above the working directory).  There is a maximum size for the
   * list of resource files.  When the max size is exceeded, the request will
   * fail and the response error code will be RequestEntityTooLarge. If this
   * occurs, the collection of ResourceFiles must be reduced in size. This can
   * be achieved using .zip files, Application Packages, or Docker Containers.
   * @property {object} [stats] Resource usage statistics for the Task.
   * @property {string} [stats.url]
   * @property {date} [stats.startTime]
   * @property {date} [stats.lastUpdateTime]
   * @property {moment.duration} [stats.userCPUTime]
   * @property {moment.duration} [stats.kernelCPUTime]
   * @property {moment.duration} [stats.wallClockTime] The wall clock time is
   * the elapsed time from when the Task started running on a Compute Node to
   * when it finished (or to the last time the statistics were updated, if the
   * Task had not finished by then). If the Task was retried, this includes the
   * wall clock time of all the Task retries.
   * @property {number} [stats.readIOps]
   * @property {number} [stats.writeIOps]
   * @property {number} [stats.readIOGiB]
   * @property {number} [stats.writeIOGiB]
   * @property {moment.duration} [stats.waitTime]
   * @property {object} [dependsOn] The Tasks that this Task depends on. This
   * Task will not be scheduled until all Tasks that it depends on have
   * completed successfully. If any of those Tasks fail and exhaust their retry
   * counts, this Task will never be scheduled.
   * @property {array} [dependsOn.taskIds] The taskIds collection is limited to
   * 64000 characters total (i.e. the combined length of all Task IDs). If the
   * taskIds collection exceeds the maximum length, the Add Task request fails
   * with error code TaskDependencyListTooLong. In this case consider using
   * Task ID ranges instead.
   * @property {array} [dependsOn.taskIdRanges]
   * @property {array} [applicationPackageReferences] A list of Packages that
   * the Batch service will deploy to the Compute Node before running the
   * command line. Application packages are downloaded and deployed to a shared
   * directory, not the Task working directory. Therefore, if a referenced
   * package is already on the Node, and is up to date, then it is not
   * re-downloaded; the existing copy on the Compute Node is used. If a
   * referenced Package cannot be installed, for example because the package
   * has been deleted or because download failed, the Task fails.
   * @property {object} [authenticationTokenSettings] The settings for an
   * authentication token that the Task can use to perform Batch service
   * operations. If this property is set, the Batch service provides the Task
   * with an authentication token which can be used to authenticate Batch
   * service operations without requiring an Account access key. The token is
   * provided via the AZ_BATCH_AUTHENTICATION_TOKEN environment variable. The
   * operations that the Task can carry out using the token depend on the
   * settings. For example, a Task can request Job permissions in order to add
   * other Tasks to the Job, or check the status of the Job or of other Tasks
   * under the Job.
   * @property {array} [authenticationTokenSettings.access] The authentication
   * token grants access to a limited set of Batch service operations.
   * Currently the only supported value for the access property is 'job', which
   * grants access to all operations related to the Job which contains the
   * Task.
   */
  constructor() {
  }

  /**
   * Defines the metadata of CloudTask
   *
   * @returns {object} metadata of CloudTask
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'CloudTask',
      type: {
        name: 'Composite',
        className: 'CloudTask',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          url: {
            required: false,
            serializedName: 'url',
            type: {
              name: 'String'
            }
          },
          eTag: {
            required: false,
            serializedName: 'eTag',
            type: {
              name: 'String'
            }
          },
          lastModified: {
            required: false,
            serializedName: 'lastModified',
            type: {
              name: 'DateTime'
            }
          },
          creationTime: {
            required: false,
            serializedName: 'creationTime',
            type: {
              name: 'DateTime'
            }
          },
          exitConditions: {
            required: false,
            serializedName: 'exitConditions',
            type: {
              name: 'Composite',
              className: 'ExitConditions'
            }
          },
          state: {
            required: false,
            serializedName: 'state',
            type: {
              name: 'Enum',
              allowedValues: [ 'active', 'preparing', 'running', 'completed' ]
            }
          },
          stateTransitionTime: {
            required: false,
            serializedName: 'stateTransitionTime',
            type: {
              name: 'DateTime'
            }
          },
          previousState: {
            required: false,
            serializedName: 'previousState',
            type: {
              name: 'Enum',
              allowedValues: [ 'active', 'preparing', 'running', 'completed' ]
            }
          },
          previousStateTransitionTime: {
            required: false,
            serializedName: 'previousStateTransitionTime',
            type: {
              name: 'DateTime'
            }
          },
          commandLine: {
            required: false,
            serializedName: 'commandLine',
            type: {
              name: 'String'
            }
          },
          containerSettings: {
            required: false,
            serializedName: 'containerSettings',
            type: {
              name: 'Composite',
              className: 'TaskContainerSettings'
            }
          },
          resourceFiles: {
            required: false,
            serializedName: 'resourceFiles',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ResourceFileElementType',
                  type: {
                    name: 'Composite',
                    className: 'ResourceFile'
                  }
              }
            }
          },
          outputFiles: {
            required: false,
            serializedName: 'outputFiles',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'OutputFileElementType',
                  type: {
                    name: 'Composite',
                    className: 'OutputFile'
                  }
              }
            }
          },
          environmentSettings: {
            required: false,
            serializedName: 'environmentSettings',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'EnvironmentSettingElementType',
                  type: {
                    name: 'Composite',
                    className: 'EnvironmentSetting'
                  }
              }
            }
          },
          affinityInfo: {
            required: false,
            serializedName: 'affinityInfo',
            type: {
              name: 'Composite',
              className: 'AffinityInformation'
            }
          },
          constraints: {
            required: false,
            serializedName: 'constraints',
            type: {
              name: 'Composite',
              className: 'TaskConstraints'
            }
          },
          userIdentity: {
            required: false,
            serializedName: 'userIdentity',
            type: {
              name: 'Composite',
              className: 'UserIdentity'
            }
          },
          executionInfo: {
            required: false,
            serializedName: 'executionInfo',
            type: {
              name: 'Composite',
              className: 'TaskExecutionInformation'
            }
          },
          nodeInfo: {
            required: false,
            serializedName: 'nodeInfo',
            type: {
              name: 'Composite',
              className: 'ComputeNodeInformation'
            }
          },
          multiInstanceSettings: {
            required: false,
            serializedName: 'multiInstanceSettings',
            type: {
              name: 'Composite',
              className: 'MultiInstanceSettings'
            }
          },
          stats: {
            required: false,
            serializedName: 'stats',
            type: {
              name: 'Composite',
              className: 'TaskStatistics'
            }
          },
          dependsOn: {
            required: false,
            serializedName: 'dependsOn',
            type: {
              name: 'Composite',
              className: 'TaskDependencies'
            }
          },
          applicationPackageReferences: {
            required: false,
            serializedName: 'applicationPackageReferences',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'ApplicationPackageReferenceElementType',
                  type: {
                    name: 'Composite',
                    className: 'ApplicationPackageReference'
                  }
              }
            }
          },
          authenticationTokenSettings: {
            required: false,
            serializedName: 'authenticationTokenSettings',
            type: {
              name: 'Composite',
              className: 'AuthenticationTokenSettings'
            }
          }
        }
      }
    };
  }
}

module.exports = CloudTask;
